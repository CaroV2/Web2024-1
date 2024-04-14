export const fetchCatImage = async () => {
    try {
        const image = await fetch(
            "https://cataas.com/cat"
        ).then((res) => res.json());
        return image;

    } catch (error) {
      console.error(error);
    }
  };

  export const fetchCatFact = async () => {
    try {
        const catfact = await fetch(
            "https://catfact.ninja/fact"
        ).then((res) => res.json());
        return catfact.fact;
        
    } catch (error) {
      console.error(error);
    }
  };