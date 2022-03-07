import Header from "../../../../Header"

const Achatina = () => {
    return(
        <div>
            <Header/>
            <div>
            <h1>Achatina</h1>
            <div className="Container">
                <div className="Dino"></div>
                <div className="Raising">
                    <h3>Raising Information</h3>
                <table>
                    <tr>
                        <td>Gestation Time</td> <td>7h 56min 11.429s</td>
                    </tr>
                    <tr>
                        <td>Baby Time</td> <td>9h 15m 33.333s</td>
                    </tr>
                    <tr>
                        <td>Juvenile Time</td> <td>1d 13h 2m 13.333s</td>
                    </tr>
                    <tr>
                        <td>Adolescent Time</td> <td>1d 22h 17m 46.667s</td>
                    </tr>
                    <tr><td>Total Raise Time</td><td>3d 20h 35m 33.333s</td></tr>
                    <tr><td>Breeding Interval</td><td>18h - 2d</td></tr>
                </table>
                </div>
                <br/>
                <div className="BaseStats">
                    <h3>Base Stats</h3>
                    <table>
                        <th>Stat</th><th>Base Value</th> 
                    <tr>
                        <td>Health</td><td>75</td>
                    </tr>
                    <tr>
                        <td>Stamina</td><td>100</td>
                    </tr>
                    <tr>
                        <td>Oxygen</td><td>150</td>
                    </tr>
                    <tr>
                        <td> Food</td><td>450</td>
                    </tr>
                    <tr>
                        <td>Weight</td><td>600</td>
                    </tr>
                    <tr>
                        <td>Melee</td><td>0</td>
                    </tr>
                    <tr>
                        <td>Speed</td><td>100%</td>
                    </tr>
                    <tr>
                        <td>Torpor</td><td>50</td>
                    </tr>
                    
                    
                    </table>                    
                    
                    
                    
                    
                    </div>
                <div className="ColorRegions"></div>
                
                </div>
            </div>

        </div>
    )
}

export default Achatina;