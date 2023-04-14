const Accordion = ({title,active,setActive}) => {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={()=>setActive(title)}>CLICK ME</span>
        </div>
      </div>
      <div className={(active===title ? "show" : "")+ "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            sequi quis laborum ipsam? Et reprehenderit obcaecati eveniet? Hic ex
            laborum architecto odio quaerat maiores, enim ea nemo, consequuntur
            ipsum ratione?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
