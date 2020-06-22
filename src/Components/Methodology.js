import React, {useState} from "react";
import "../index.css"

export default function Metholodogy() {
    return (
        <div className="methodology-container">
            <h2 className="linear-wipe">
                Values I Live By.
            </h2>
            <div className="values-container">
                <div className="effortful">
                    <h4 className="effortful-title">
                        Effortful
                    </h4>
                    <h3 className="value-subtitle">
                        Go the extra mile for everything I do
                    </h3>
                    <p className="value-paragraph">
                        If I complete a task while knowing there was one more thing I could do to make it better, I failed.
                    </p>
                </div>
                <div className="observant">
                    <h4 className="observant-title">
                        Observant
                    </h4>
                    <h3 className="value-subtitle">
                        Ask questions and hold on before jumping onto conclusions: Minimize bias and be on the lookout for insights that hide in irrelevant everyday places, activities and things, like food.
                    </h3>
                    <p className="value-paragraph">
                        What makes a good food? How its taste related to its proportions? Why chefs usually prefer cooking in small proportions? Maybe because they have more control over it.
                    </p>
                </div>
                <div className="patient">
                    <h4 className="patient-title">
                        Patient and Compromising
                    </h4>
                    <h3 className="value-subtitle">
                        Know when to give up reallocate your time, shift focus and take a step back.
                    </h3>
                    <p className="value-paragraph">
                        Sure, “sky is the limit.” But consider the time and effort it would take to build a rocket to reach there. Can a plane ride at 38.000 feet I so often take substitute? Can I optimize, reshape and then incorporate my task into something I already do with much less effort and time? There is always more than one way to reach a goal: don’t rush to take the first path and know the tradeoffs so I can decide when “what is lost” is lesser than “what is gained.”
                    </p>
                </div>
                <div className="reflective">
                    <h4 className="reflective-title">
                        Reflective
                    </h4>
                    <h3 className="value-subtitle">
                        And finally… reflect.
                    </h3>
                    <p className="value-paragraph">
                        Treat knowledge and imagination like a directed graph and reflect, everyday, to create new edges between each vertices: if tasked to find the shortest path between vertex A and Z, have your graph connected well enough so there is only one path between each combination of distinct vertices, shortest path possible.
                    </p>
                </div>

            </div>
        </div>

    )
}