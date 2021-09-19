import { uniq, flatten } from 'lodash';
import { filterResults } from './filter';
import {
  InfinityQuery,
  InfinityColumn,
  GrafanaTableRow,
  timeSeriesResult,
  InfinityJSONQuery,
  InfinityGraphqlQuery,
  InfinityCSVQuery,
  InfinityHTMLQuery,
  InfinityXMLQuery,
} from './../../types';
import { toDataFrame } from '@grafana/data';
import { normalizeColumns } from './utils';

export class InfinityParser {
  target: Extract<
    InfinityQuery,
    InfinityJSONQuery | InfinityGraphqlQuery | InfinityCSVQuery | InfinityHTMLQuery | InfinityXMLQuery
  >;
  rows: GrafanaTableRow[];
  series: timeSeriesResult[];
  AutoColumns: InfinityColumn[];
  StringColumns: InfinityColumn[];
  NumbersColumns: InfinityColumn[];
  TimeColumns: InfinityColumn[];
  constructor(
    target: Extract<
      InfinityQuery,
      InfinityJSONQuery | InfinityGraphqlQuery | InfinityCSVQuery | InfinityHTMLQuery | InfinityXMLQuery
    >
  ) {
    this.rows = [];
    this.series = [];
    this.target = target;
    this.StringColumns = target.columns.filter((t) => t.type === 'string');
    this.NumbersColumns = target.columns.filter((t) => t.type === 'number');

    this.TimeColumns = target.columns.filter(
      (t) => t.type === 'timestamp' || t.type === 'timestamp_epoch' || t.type === 'timestamp_epoch_s'
    );
    this.AutoColumns = target.columns || [];
  }
  private canAutoGenerateColumns(): boolean {
    return (
      (this.target.type === 'csv' || this.target.type === 'json' || this.target.type === 'graphql') &&
      this.target.columns.length === 0
    );
  }
  toTable() {
    let columns = this.target.columns;
    if (this.canAutoGenerateColumns()) {
      columns = this.AutoColumns;
    }
    return {
      name: this.target.refId,
      rows: this.rows.filter((row) => row.length > 0),
      columns: normalizeColumns(columns),
    };
  }
  toTimeSeries() {
    const targets = uniq(this.series.map((s) => s.target));
    return targets.map((t) => {
      return {
        target: t,
        name: this.target.refId,
        datapoints: flatten(this.series.filter((s) => s.target === t).map((s) => s.datapoints)),
      };
    });
  }
  getResults() {
    if (
      this.target.filters &&
      this.target.filters.length > 0 &&
      this.target.columns &&
      this.target.columns.length > 0
    ) {
      this.rows = filterResults(this.rows, this.target.columns, this.target.filters);
    }
    if (this.target.format === 'timeseries') {
      return this.toTimeSeries();
    } else if (this.target.format === 'dataframe') {
      const frame = toDataFrame(this.toTable());
      frame.name = this.target.refId;
      return frame;
    } else {
      return this.toTable();
    }
  }
}
