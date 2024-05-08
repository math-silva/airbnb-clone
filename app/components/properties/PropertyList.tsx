import PropertyListItem from "./PropertyListItem";

const PropertyList = () => {
  return (
    <>
      <PropertyListItem 
        imageUrl={"/cabin_1.webp"} imageAlt={"Cabin 1"}
        location={"Córrego do Bom Jesus, Brazil"}
        price={75}
      />
      <PropertyListItem 
        imageUrl={"/cave_1.webp"} imageAlt={"Cave 1"}
        location={"Los Balcones, Spain"}
        price={235}
      />
      <PropertyListItem 
        imageUrl={"/beachfront_1.webp"} imageAlt={"Beachfront 1"}
        location={"Santos, Brazil"}
        price={70}
      />
      <PropertyListItem 
        imageUrl={"/amazing_pool_1.webp"} imageAlt={"Amazing Pool 1"}
        location={"São Paulo, Brazil"}
        price={200}
      />
    </>
  );
}

export default PropertyList;