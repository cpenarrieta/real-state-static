import React from "react";

export default function Faq() {
  return (
    <div className="bg-logoPink">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-logoFont">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t border-indigo-400 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:col-gap-8 md:row-gap-12">
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                What's the best thing about Switzerland?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                Why do you never see elephants hiding in trees?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                Because they're so good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                How do you make holy water?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                Why can't you hear a pterodactyl go to the bathroom?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                Because the pee is silent. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                What do you call someone with no body and no nose?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                Why did the invisible man turn down the job offer?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                He couldn't see himself doing it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
