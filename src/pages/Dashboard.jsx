import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Card";

function Dashboard() {
  return (
    <MainLayout>
      <div className="grid gap-4 sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">

        {/* Baris 1 */}
        <div className="sm:col-span-4">
          <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet."
          />
        </div>

        <div className="sm:col-span-4">
          <Card
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet."
          />
        </div>

        <div className="sm:col-span-4">
          <Card
            title="Upcoming Bill"
            link={true}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet."
          />
        </div>

        {/* Baris 2 & 3 */}
        <div className="sm:col-span-4 sm:row-span-2">
          <Card
            title="Recent Transaction"
            link={true}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptates asperiores!"
          />
        </div>

        <div className="sm:col-span-8">
          <Card
            title="Statistics"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet."
          />
        </div>

        <div className="sm:col-span-8">
          <Card
            title="Expenses Breakdown"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet."
          />
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;