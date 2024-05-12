"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const DashboardNavigation = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const onClickCustomer = () => {
    router.push("/customers");
  };

  const onClickInventory = () => {
    router.push("/inventory");
  };

  const onClickSales = () => {
    router.push("/sales");
  };

  const onClickSalesRecord = () => {
    router.push("/salesRecord");
  };

  return (
    <div className="m-5 p-3 w-100  bg-dark text-light border border-dark text-center">
      <h1>Navigation</h1>
      <table className="mt-5 table table-dark table-bordered">
        <tbody>
          <tr onClick={onClickCustomer}>
            <td>
              <h4>Customer Database</h4>
            </td>
          </tr>
          <tr onClick={onClickInventory}>
            <td>
              <h4>Inventory</h4>
            </td>
          </tr>
          <tr onClick={onClickSales}>
            <td>
              <h4>Sales</h4>
            </td>
          </tr>
          {session?.user.isAdmin && (
            <tr onClick={onClickSalesRecord}>
              <td>
                <h4>Sales Record</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardNavigation;
