import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x84D5aEd39FFa879e47c41B4BBEB0368ceC5b5db9"
);

export default instance;
