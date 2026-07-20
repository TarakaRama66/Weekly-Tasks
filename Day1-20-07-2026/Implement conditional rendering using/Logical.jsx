function Logical() {
  const isPremiumMember = true;

  return (
    <div>
      <h1>Shopping Website</h1>

      {isPremiumMember && (
        <h2>Congratulations! You got a 20% Discount.</h2>
      )}
    </div>
  );
}

export default Logical;