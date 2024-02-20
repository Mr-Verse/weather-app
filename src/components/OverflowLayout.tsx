import { useState } from "react"

export default function OverflowLayout() {
    const [asideIsOpen, setAsideIsOpen] = useState(false)

    return (
        <>
            <div className="bg-secondary" style={{ height: "100vh", overflowX: "hidden", }}>
                <div style={{
                    minWidth: "200px", height: "100vh", background: "orange", zIndex: 1,
                    position: "absolute", left: 0, transform: `${asideIsOpen ? "translateX(0)" : "translatex(-100%)"}`,
                    transition: "all 0.4s"
                }}>
                    Aside
                </div>
                <button className="btn btn-primary mt-2 w-100"
                    style={{ zIndex: 2 }}
                    onClick={() => { asideIsOpen ? setAsideIsOpen(false) : setAsideIsOpen(true) }}>
                    Click</button>
                <div style={{
                    background: "red", position: "relative",
                    transform: `${asideIsOpen ? "translateX(200px)" : "translatex(0)"}`,
                    transition: "all 0.4s",
                }}>
                    I like your solution (voted it up), but can you do the other way around (which is what I need here)? I tried reverse-engineering your technique, and I managed to make it animate the text from left to centre, but unfortunately it jumps back to the left (without animation) once I hover the mouse out. :(. Lorem, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque quisquam nesciunt provident consectetur animi est doloribus, cum voluptates aliquam quam, modi possimus fugiat earum, error recusandae! Doloremque delectus architecto illum quis eos voluptates magni placeat cumque! Ab sed odit quasi nisi iure eaque reiciendis ducimus fugiat rem blanditiis, magnam natus culpa adipisci voluptatem excepturi eligendi aspernatur veritatis vel ex pariatur rerum id quidem quisquam eius. Voluptatum obcaecati quaerat quibusdam et, sit consequuntur quisquam possimus expedita quod doloribus cupiditate cum debitis mollitia, perspiciatis quia. Sunt dolore quisquam eveniet natus facilis saepe non quidem. Molestias officiis facere minima velit doloribus reiciendis earum esse reprehenderit iusto doloremque, nobis incidunt voluptatem. Reiciendis odit nihil quia provident saepe ullam asperiores reprehenderit, ratione aperiam, ducimus vel voluptatem exercitationem fuga cumque. Natus nostrum beatae pariatur earum quo. Soluta commodi accusantium ipsam exercitationem, autem mollitia fugiat recusandae at alias error quae modi inventore, praesentium quisquam necessitatibus repellat harum rem officia numquam! Molestiae optio dolorum error ab rem dolores. Asperiores, cupiditate. Unde, illum nostrum, accusantium eveniet fuga dolorum rem eius eos repellat deleniti necessitatibus vitae deserunt ad expedita consequuntur, a laborum vero provident veritatis. Quam doloribus ullam tenetur incidunt, minima et voluptate tempora numquam. Hic eveniet nostrum suscipit!
                </div>
            </div>
        </>
    )
}