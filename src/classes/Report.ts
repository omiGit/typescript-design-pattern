import { Reporter } from "../interfaces/Reporter";
import { ReportData } from "../interfaces/ReportData";

export class Report {
  private report: Reporter;
  private reportData: ReportData;

  constructor(reportData: ReportData, report: Reporter) {
    this.report = report;
    this.reportData = reportData;
  }

  create() {
    const data: string = this.reportData.read();
    this.report.print(data);
  }
}
