import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appzVMZ1rJ2gCY45a'
);

export default airtable;
