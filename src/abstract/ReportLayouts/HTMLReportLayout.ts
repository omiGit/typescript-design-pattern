import { Reporter } from "../../interfaces/Reporter";
import fs from "fs";
export abstract class HTMLReportLayout implements Reporter {
  constructor(private fileName: string) {}
  abstract getLayout(data: string): string;
  print(data: string): void {
    const htmlLayout: string = this.getLayout(data);
    const html = `
        <html>
            <head>
               
            </head>
            <body>
              ${htmlLayout}
            </body>
        </html>
    `;
    fs.writeFileSync(`${this.fileName}.html`, html);
  }
}
