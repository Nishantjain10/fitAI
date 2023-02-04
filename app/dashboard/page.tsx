"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/pages/api/appwriteConfig";
import Link from "next/link";
import GraphSvg from "public/images/github-contribution-grid-snake.svg"
import Image from "next/image";

interface UserData {
  $id?: string;
  name?: string;
  email?: string;
  emailVerification?: boolean;
  charAt?: string;
}



const page: React.FC = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserData>({});
  let firstLetter = '';
  if (userDetails.email) {
    firstLetter = userDetails.email.charAt(0).toUpperCase();;
  }
  
  
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response: any) {
        setUserDetails(response);
      },
      function (error: any) {
        console.log(error);
      }
      );
    }, []);
    
    const handleLogout = async () => {
      try {
        await account.deleteSession("current");
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    
    return (
      <>
      {userDetails ? (
        <>
          <div className="md:container md:mx-auto shadow-xl font-product flex flex-row items-center justify-between py-3 px-4 mt-8 border border-black">
            <div>
              <button
                className="bg-[#FF4C6E] text-white p-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="text-xl flex items-center gap-2">
              <span> Hello, {userDetails.name}! </span>
              <div className="bg-violet-500 w-[50px] h-[50px] rounded-full flex justify-center items-center text-white">
              {firstLetter}</div>
            </div>
          </div>
          <div className="form bg-violet-500 text-white  shadow-lg py-24 rounded-md mt-12  md:mx-auto px-12 border border">
          <div className="title mt- font-product flex flex-row justify-center items-center">
            <h2 className="mt-2 text-6xl text-white  font-bold tracking-tight">
              Personal Information
            </h2>
          </div>
            <div className="font-product grid gap-6 mt-24 md:grid-cols-2 md:container md:mx-auto">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md text-black rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="John"
                  value={userDetails.name}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md text-black rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="John"
                  value={userDetails.email}
                  required
                />
              </div>
            </div>
            <div className="font-product grid gap-6 mt-12 md:grid-cols-2 md:container md:mx-auto">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="95XX4 86XX21"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Country
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="INDIA"
                  required
                />
              </div>
            </div>
            <div className="font-product grid gap-6 mt-12 md:grid-cols-2 md:container md:mx-auto">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="8, Angels Avenue"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Locality
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="San Diego, California"
                  required
                />
              </div>
            </div>
           
            <div className="font-product flex flex-row items-center justify-center md:container md:mx-auto mt-12">
              <div className="justify-self-center w-auto font-product font-medium">
                <button className=" px-4 py-3 font-semibold rounded-md  bg-black text-white mx-8 mt-7 hover:scale-105 transition-all">
                  Verify Number
                </button>
              </div>
              <div className="justigy-self-start w-auto font-product font-medium">
                <button className="rounded-md  bg-white px-4 py-3 font-semibold rounded-md bg-black text-white mx-8 mt-7 hover:border hover:border-black  hover:scale-105 transition-all">
                  Email Verification :
                  {userDetails.emailVerification ? "Verified" : "Not-Verified"}
                </button>
              </div>
              <div className="justify-self-center w-auto font-product font-medium">
                <button className="bg-lime-600 shadow-sm text-white px-4 py-3 font-semibold rounded-md mx-8 mt-7 hover:scale-105 transition-all">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="plans-section mt-32 font-product flex flex-col justify-center items-center">
            <h2 className="mt-2 text-6xl text-violet-500 font-bold tracking-tight">
              Track Progress
            </h2>
          <Image  className=" border border-violet-500 shadow-md mt-24 rounded-md  scale-125" src={GraphSvg} alt={""}></Image>
          <div className="w-[80ch] text-left text-base text-violet-700 font-medium md:mx-auto py-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam soluta doloremque amet corporis fugit unde, possimus laudantium similique delectus nostrum rem blanditiis error mollitia praesentium, asperiores odit deserunt! Voluptatum officiis, dolores repudiandae voluptates, libero vel nulla dolor soluta officia laboriosam nemo similique, aliquid facere quod fugiat minima deleniti eius quidem iste maiores vitae amet! Quis officia, doloribus perferendis asperiores velit officiis ratione illum est excepturi recusandae, autem molestiae aliquam. Ut, odit aperiam! Quas ea aut deserunt sint, consequatur magnam praesentium id, ipsa modi consectetur, atque velit porro et quia? Cumque officiis iste sit ullam, non minus aliquid. Veritatis, deleniti atque?</div>
          </div>
          <div className="plans-section bg-violet-500 mt-24 py-24 font-product flex flex-col justify-center items-center">
            <h2 className="mt-2 text-6xl text-white font-bold  tracking-tight">
              Saved Plans
            </h2>
            <div className="w-[1300px] h-[600px] bg-white overflow-auto p-12 rounded-md mt-24 border border-2 text-left border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, inventore sequi fuga ullam minus sapiente eum id officia mollitia. Voluptatum atque animi culpa, non nihil itaque, velit nesciunt sequi, aliquid odio laboriosam libero mollitia repellendus quas facere dolore deserunt dolor eius cupiditate alias? Blanditiis ipsam qui commodi ratione excepturi! Atque quod commodi odit possimus facilis neque iure modi eveniet! Perspiciatis unde dicta quidem illum maiores, amet voluptates ipsa accusamus neque sequi! Hic ipsum facilis odit aspernatur! Ex unde incidunt voluptates sapiente corporis, eum consectetur repudiandae saepe eveniet, accusantium ducimus molestias obcaecati ut quos mollitia quidem porro maxime rem tenetur dolor vel asperiores! Rem ad eligendi odit iusto corrupti quibusdam quas esse dignissimos, aliquid accusantium veniam, obcaecati porro consequatur quae incidunt maiores aut distinctio eos. Sequi voluptatem voluptatibus dolore dolorum, perferendis temporibus quasi quibusdam. Quos dolor nobis molestiae reprehenderit, ullam ipsa porro ut, voluptatibus saepe impedit dolore, doloremque voluptas sunt! Animi placeat ad illum consequatur quos nisi officia, laboriosam quaerat, error ab voluptatibus natus omnis pariatur magni sapiente, ipsum quasi inventore in cumque fugit? Dolores magnam quis amet, doloribus quia rerum adipisci aliquid, magni, quam accusantium rem ipsum. Praesentium consectetur dignissimos ipsam, deleniti voluptates quaerat totam perspiciatis facilis! Magni, atque veniam amet iure doloribus earum, quod, deleniti soluta reiciendis voluptatem mollitia. Perspiciatis delectus tempore impedit fugiat voluptatibus laudantium nisi temporibus porro recusandae debitis modi vitae, consequuntur corrupti veritatis voluptatum at, eius autem similique eum quaerat blanditiis assumenda! Sint, ex eveniet provident enim eius ab voluptates facere eligendi deserunt quos, expedita repudiandae impedit. Eveniet doloribus vel hic minima, minus maiores eum a, voluptatibus omnis, molestias necessitatibus. Architecto inventore voluptatem veritatis possimus aspernatur, totam, eligendi odit omnis animi fugit qui alias? Debitis obcaecati amet possimus sapiente assumenda consectetur eum mollitia, ea, sint rerum omnis non porro dolore pariatur nulla aliquam cum iure accusamus error laboriosam incidunt ex temporibus magnam? Minus tempore vel provident. Modi quos ratione placeat hic, cum, numquam illum laudantium accusamus itaque commodi perferendis vero praesentium, quod quidem ea officia earum! Mollitia iusto, ea suscipit repellendus veniam quisquam eum culpa itaque cupiditate modi inventore nam porro. Libero a aliquid sit, unde neque, quos beatae laborum alias ipsum dolorum blanditiis sunt doloribus eum corporis voluptates? Quod consectetur ab veniam vitae! Sequi molestiae beatae repellat veniam consequuntur temporibus, culpa pariatur perferendis velit hic aut odit totam accusamus, quasi voluptatibus veritatis facere voluptate saepe corporis consequatur exercitationem ipsum. Deserunt, eius ad. Illum sit magnam nam molestias omnis et quisquam nesciunt officiis quaerat molestiae tempora itaque enim in labore, impedit fugiat. Tempora illum adipisci corrupti quam? Ea, aliquid ipsam sunt quo voluptate dignissimos neque accusamus explicabo consequatur, reprehenderit, necessitatibus cumque nam praesentium non facilis perspiciatis perferendis. Sed laborum cupiditate labore illum esse distinctio neque fugit eligendi, minus quisquam, voluptas dolorem? Reiciendis velit non nemo tempore et magnam animi distinctio enim rerum. Blanditiis repellat earum culpa, dolorem quod nesciunt dolores corrupti ullam nemo sunt? Impedit obcaecati quod commodi dolores quae. Deserunt aut ullam ipsa sapiente consectetur, laudantium esse facere amet. Saepe dicta vero maxime rerum minima ipsa, earum, iure dolorem dolores aperiam vel fugiat. Itaque, eum? Quas iure tempora id suscipit eius incidunt itaque quis. Quas tenetur totam perspiciatis cum sunt reiciendis facilis maiores voluptatum adipisci odit voluptatem quos rerum, sed quisquam rem dolores impedit, magnam molestias sapiente possimus dolor nobis unde! Nemo facilis cumque dolore, totam ea quod voluptas autem. In suscipit eius est? Placeat, illum sint non quis aperiam accusantium iure vel atque ipsum. Reprehenderit cupiditate, fugit vel quisquam animi quos voluptates minima tempore, nemo nostrum enim maiores aperiam eius blanditiis dolore libero velit iure obcaecati minus? Esse quia fugiat aspernatur quam! Veritatis impedit aliquam nostrum perspiciatis assumenda enim! Adipisci vel libero nobis aut neque temporibus rerum, recusandae similique ab fugit est fuga assumenda, velit dolorum id perferendis ipsum facilis. Nihil, deserunt? Officia ducimus neque labore tenetur laborum corporis eaque dolores. Fugiat voluptate inventore a doloremque perferendis asperiores ab ad harum sed earum, tenetur totam, dolor consequuntur sint quos unde quae, eligendi eius? Delectus ipsum et saepe itaque, harum explicabo aliquid, pariatur at dignissimos quibusdam, sed mollitia molestiae dicta maxime dolore minima sit veniam amet accusamus fugit inventore placeat dolores officiis. Assumenda aperiam commodi, repellendus quae vel quibusdam velit autem corporis consequatur non neque cumque ea odit? Voluptas voluptate quisquam ut soluta! Illum tempore quis expedita nihil, perferendis alias veritatis recusandae animi! Quisquam, accusamus? Saepe facilis id quia, alias qui, maiores exercitationem harum obcaecati itaque reiciendis quis cumque nemo fugiat? Repellat enim sunt eveniet quidem nihil. Ea non hic est tempore praesentium accusantium commodi totam minus dicta assumenda repudiandae, ut quisquam aperiam neque voluptatem itaque eos, atque impedit, cum in illo quam fuga? Exercitationem quae tenetur iusto tempore, corporis odio aspernatur at debitis praesentium fuga nihil quam asperiores labore, sit culpa maxime esse. Molestias, repellat eum laboriosam laborum beatae accusamus fugit cum et omnis maxime iusto culpa reprehenderit impedit aspernatur facilis cumque debitis atque fugiat ipsa amet natus eligendi pariatur officia odit. Nisi corporis, impedit harum a quam reprehenderit sint odit maiores atque aperiam magni quae reiciendis dolor, dolorem facilis debitis neque voluptatem repudiandae nam. Dolore similique laboriosam ad hic mollitia nostrum soluta, ipsam aut eligendi recusandae cupiditate vitae dicta possimus minima qui dignissimos ut maxime, nesciunt error. Fuga nemo cumque nisi similique veritatis, animi minus odit voluptates repellendus! In quis rerum totam cupiditate fuga saepe, nemo debitis cum. Sit, ab quidem ducimus aliquam nobis adipisci inventore voluptatem alias minima voluptatum cupiditate modi vel suscipit, fuga repellat deserunt consequatur, repellendus enim dolore! Laudantium atque officiis reprehenderit tenetur consectetur? Cum atque sed ipsum et iusto repellat quas, quidem, accusamus at vero provident explicabo omnis animi debitis aut libero nostrum illo eius asperiores corrupti doloremque dolorem. Debitis error nemo unde, corporis praesentium, maxime, quis sed illo blanditiis ducimus deleniti ipsam molestias eveniet fugiat voluptatibus quas eos laudantium quibusdam! Dolor reprehenderit cumque a dicta vero aut, ad nemo nesciunt. Itaque magnam vel incidunt nesciunt adipisci quasi eum vero impedit, atque unde cum iusto inventore doloremque pariatur, totam maiores neque! Harum, libero aliquam enim non debitis sed inventore. </div>
          </div>
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link href="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
}





export default page;
