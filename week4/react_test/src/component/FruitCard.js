function FruitCard({ fruitsInfo }) {
  return (
    <div
      style={{
        margin: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        boxShadow: '5px 5px 5px 5px lightgray',
        borderRadius: '10px',
      }}
    >
      <img src={fruitsInfo.path} style={{ width: '50%', height: '50%' }} />
      <p>품명 : {fruitsInfo.name}</p>
      <p>가격 : {fruitsInfo.price} $</p>
    </div>
  );
}

export { FruitCard };
