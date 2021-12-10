const SectionList = ({sections}) => {

    
    return (
        <div className="section-list">
            {sections.map((section) => (
               
               <div className="section-preview" key ={section.id}>
                   <h2>{section.title}</h2>
                   <p>{section.body}</p>
               </div>
               
            ))}
        </div>
    );
}
 
export default SectionList;