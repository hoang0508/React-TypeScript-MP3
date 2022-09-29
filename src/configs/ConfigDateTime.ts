const curr: any = new Date();

const first = curr.getDate() - curr.getDay();
const last = first - 6;

const startDate: any = new Date(curr.getFullYear(), 0, 1);
const days = Math.floor((curr - startDate) / (24 * 60 * 60 * 1000));

const weekNumber = Math.ceil(days / 7);
const yearNumber = curr.getFullYear();
export { weekNumber, curr, first, yearNumber };
