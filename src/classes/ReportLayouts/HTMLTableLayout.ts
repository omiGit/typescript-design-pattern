import { Reporter } from "../../interfaces/Reporter";
import { HTMLReportLayout } from "../../abstract/ReportLayouts/HTMLReportLayout";
import _ from "lodash";
import { strict } from "assert";

export class HTMLTableLayout extends HTMLReportLayout implements Reporter {
  private tableName: string;
  private tableHeaderColumns: string[];

  constructor(
    fileName: string,
    tableName: string,
    tableHeaderColumns: string[]
  ) {
    super(fileName);
    this.tableName = tableName;
    this.tableHeaderColumns = tableHeaderColumns;
  }

  private getTr(data: string): string {
    return `<tr>${_.chain(data.split(","))
      .map((d) => `<td>${d}</td>`)
      .join("")
      .value()}
    </tr>`;
  }

  private getTh() {
    return `<tr>${_.map(this.tableHeaderColumns, (th) => `<th>${th}</th>`).join(
      ""
    )}</tr>`;
  }

  getLayout(data: string): string {
    const trData = _.chain(data).split("\n").value();
    const tr = _.map(trData, this.getTr);
    const table = `
        <h4>${this.tableName}</h4>
        <table>
            ${this.getTh()}
            ${tr.join("\n")}
        </table>
    `;
    return table;
  }
}
