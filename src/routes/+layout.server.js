export const load = async ({ fetch }) => {
   const getHeros = async () => {
      const res = await fetch("https://api.opendota.com/api/heroStats");
      const data = await res.json();

      return data;
   };

   return {
      heros: getHeros(),
   };
};
