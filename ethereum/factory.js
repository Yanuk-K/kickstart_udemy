import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x747d96747B6aa2216144b650b70aCe25eC2BA5Bd"
);

export default instance;
