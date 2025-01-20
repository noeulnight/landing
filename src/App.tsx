import { FaBook, FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

interface LinkProps {
  icon: React.ReactNode;
  items: {
    href: string;
    text: string;
  }[];
}

function Link({ icon, items }: LinkProps) {
  return (
    <div className="flex items-center gap-2 text-left text-sm">
      {icon}
      <div className="border-r h-[12px] border-gray-500"></div>
      <div className="flex flex-col gap-0 text-gray-600">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="text-sm">
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-gray-50 px-10 md:px-0">
      <div>
        <h1 className="text-4xl font-extrabold">Lim Taehyun</h1>
        <p className="text-sm sm:text-base mt-1 items-center text-gray-500 duration-100">
          Backend Developer
          <span className="mx-1 text-gray-500 text-sm">|</span>
          DevOps Engineer
        </p>
        <section className="mt-5 gap-1 flex flex-col">
          <h2 className="text-2xl font-bold mb-1">Contact</h2>
          <div className="gap-1 flex flex-col">
            <Link
              icon={<FaPhone />}
              items={[{ href: "tel:+821037290245", text: "+82 10 3729 0245" }]}
            />
            <Link
              icon={<FaEnvelope />}
              items={[
                { href: "tel:+821012345678", text: "contact@limtaehyun.dev" },
                {
                  href: "tel:+821012345678",
                  text: "noeulnight.mail@gmail.com",
                },
              ]}
            />
            <Link
              icon={<FaGithub />}
              items={[
                {
                  href: "https://github.com/noeulnight",
                  text: "github.com/noeulnight",
                },
              ]}
            />
            <Link
              icon={<FaBook />}
              items={[
                {
                  href: "https://limtaehyun.notion.site/64b7d5ef8d2042e7b5d779718534ec39?pvs=4",
                  text: "limtaehyun.notion.site",
                },
              ]}
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-1">Company</h2>
          <div className="flex flex-col mt-3">
            <p className="text-gray-500 text-md">
              <a
                href="https://specupad.com/"
                className="text-black font-semibold"
              >
                주식회사 리비바이오{" "}
              </a>
            </p>
            <p className="text-gray-500 text-sm mb-2">(2023.10.23 ~ current)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
