import { B_header } from "./base_header";
import { Chart_num } from "./chart_num";
import { Charts } from "./charts";
import { Table } from "./table";

export const Base = () => {
  return (
    <section className="ml-0 flex-1 md:ml-16 lg:ml-60">
      <B_header />
      <Charts />
      <Chart_num />
      <Table />
    </section>
  );
};
