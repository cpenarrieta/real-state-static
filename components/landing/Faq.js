import React from "react";

export default function Faq() {
  return (
    <div id="id-faq" className="bg-logoPink">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-logoFont">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t border-indigo-400 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:col-gap-8 md:row-gap-12">
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                Do I have to pay before creating a website?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                No. You will only pay once you feel your website is ready to go.
                Analytics and lead information will become available after you
                pay.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                Why having a website for each propeerty?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                We believe this is the best approach to generate leads. Having a
                dedicated website for a property is much better.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                What is trhe refund policy?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                If you are not satisfied send us an email at hello@realtorapp.co
                and you will get a refund. No questions asked.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                How many pictures/attachments can I add to a property website?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                You can add up to 50 high quiality pictures and up to 10 pdf
                attachments.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                Will I have a dedicated agent website?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                Yes. No matter how many properties you have activated, you will
                have a dedicated agent website.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-logoRed">
                What does the $25 price includes?
              </dt>
              <dd className="text-base leading-6 text-logoFont">
                You will be able to edit a property website and it will be live
                forever. You will be able to make changes, view analytics and
                receive leads information. Also, keep in mind that each property
                website costs $25 but you will only pay once the website is
                ready.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
