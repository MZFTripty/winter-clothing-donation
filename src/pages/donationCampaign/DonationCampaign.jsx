import React, { useEffect } from "react";
import DonationCampaignCard from "./donationCampaignCard";

export default function DonationCampaign() {
  const [donationCampaigns, setDonationCampaigns] = React.useState([]);

  useEffect(() => {
    fetch("/donationCampaign.json")
      .then((response) => response.json())
      .then((data) => setDonationCampaigns(data));
  }, []);

  return (
    <>
      <div className="text-center mb-10 md:mb-10 lg:mb-10 mt-60 md:mt-0 lg:mt-0">
        <h2 className="text-4xl mx-auto">
          Active Donation Campaigns
        </h2>
        <p className="text-lg mt-4 mx-auto">
          Browse our active winter clothing donation campaigns across
          Bangladesh. Choose a campaign that resonates with you and make a
          difference today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4 lg:gap-4  mb-10 max-w-full md:max-w-5xl lg:max-w-full mx-auto p-5">
        {donationCampaigns.map((campaign) => (
          <DonationCampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      
    </>
  );
}
