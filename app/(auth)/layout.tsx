import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full-brand.jpg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          /> 

          <div className="space-y-5 text-white" 
                      style={{ marginBottom: "-30px" }}
>
            <h1 className="h1">Organize Your <span style={{ color: "orange" }}>Files</span> Like a Pro.</h1>
            
            <p className="body-1">
              Keep all your documents safe and centralized in one place.
            </p>
          </div>
          <Image
            src="/assets/images/files.svg"
            alt="Files"
            width={342}
            height={342}
            style={{ marginBottom: "-30px" }}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
<div className="text-white" style={{ marginBottom: "-30px" }}>
  <h2 className="h2">
    A <span style={{ color: "#ee9bff" }}>prototype</span> of some famous cloud storages:👇🏻
  </h2>
</div>
<Image
  src="/assets/images/files.png"
  alt="Files"
  width={942}
  height={342}
  className="transition-all hover:rotate-2 hover:scale-105"
  style={{ marginBottom: "10px" }}
/>
<div className="text-white">
  <h4 className="h4">
    note:-This Project is Made By~ <span style={{ color: "lavender" }}>@Piyusss</span></h4>
</div>


        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.jpg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
