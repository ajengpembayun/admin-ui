import React from "react";
import Logo from "../Logo";
import Input from "../Input";
function MainLayout(props) {
  const { children } = props;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-defaultBlack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between px-7 py-12">
        
        {/* Atas */}
        <div>
        <div className="mb-10">
          <Logo variant="secondary" />
        </div>
          <nav>
            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
              <div className="mx-auto sm:mx-0">O</div>
              <div className="ms-3 hidden sm:block">
                Overview
              </div>
            </div>

            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
              <div className="mx-auto sm:mx-0">B</div>
              <div className="ms-3 hidden sm:block">
                Balances
              </div>
            </div>

            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
              <div className="mx-auto sm:mx-0">T</div>
              <div className="ms-3 hidden sm:block">
                Transactions
              </div>
            </div>
          </nav>
        </div>

        {/* Bawah */}
        <div>
          <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
            <div className="mx-auto sm:mx-0">
              Logo
            </div>

            <div className="ms-3 hidden sm:block">
              Logout
            </div>
          </div>

          <div className="border my-10 border-special-bg"></div>

          <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">icon</div>
            </div>
        </div>
      </aside>

      <div className="bg-special-mainBg flex-1 flex flex-col">

        <header className="border-b border-gray-05 px-6 py-7 flex justify-between items-center">

          {/* kiri */}
          <div className="flex items-center">
            <div className="font-bold text-2xl me-6">
              Username
            </div>

            <div className="text-gray-03 hidden sm:block">
              May 19, 2023
            </div>
          </div>

          {/* kanan */}
          <div className="flex items-center">
            <div className="me-10">
              icon
            </div>

            <div className="w-48">
              <Input
                backgroundColor="bg-white"
                border="border-white"
                placeholder="Search here"
              />
            </div>
          </div>

        </header>

        <main className="flex-1 px-6 py-4">
          {children}
        </main>

      </div>
    </div>
  );
}

export default MainLayout;