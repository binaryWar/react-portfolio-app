function Skill(){
    const skills =  [
        {imageFilePath : '/img/javascript.svg', text : 'JavaScript'},   
        {imageFilePath : '/img/typescript.svg', text : 'Typescript'},   
        {imageFilePath : '/img/java.svg', text : 'Java'},   
        {imageFilePath : '/img/nodejs.svg', text : 'NodeJs'},   
        {imageFilePath : '/img/express.svg', text : 'ExpressJs'},   
        {imageFilePath : '/img/spring-icon.svg', text : 'Spring Boot'}, 
        {imageFilePath : '/img/mysql.svg', text : 'MySql'},   
        {imageFilePath : '/img/pgsql.svg', text : 'PostgreSql'},   
        {imageFilePath : '/img/angular.svg', text : 'Angular'},   
        {imageFilePath : '/img/react.svg', text : 'React'},   
        {imageFilePath : '/img/git.svg', text : 'Git'},   
        {imageFilePath : '/img/ubuntu.svg', text : 'linux'}   
    ]

    const skillCount = skills.length;

    const rows = 4;
    const skillPerRow = skillCount/rows;
    const modifiedSkillSet = [];
    
    for(let no =0,ind=0;ind<skillCount;no++){
        const arr = [];
        for(let col=0;col < (no%2===0 ? skillPerRow-1 : skillPerRow) && ind<skillCount;ind++,col++){
            arr.push(skills[ind]);
        }
        modifiedSkillSet.push(arr);
    }

    return (
        <section>
            <div className="skill-header">
                <h1>Skill : Upskill</h1>
            </div>
            <div className="skill-wrapper">
                {
                    modifiedSkillSet.map((items,i)=> (
                        <div className="skill-row" key={i}>
                            {
                                items.map((item,j)=>(
                                    <div key={i+'-'+j}>
                                        <img src={item.imageFilePath} />
                                        <span> {item.text} </span>   
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skill;