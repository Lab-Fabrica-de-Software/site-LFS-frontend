export const onClickScrollToSection = (id: string) => {
    const section = document.getElementById(id.replace("#", ""));
    if (section) {
        const isMobile = window.innerWidth <= 768;
        section.scrollIntoView({
            behavior: "smooth",
            block: isMobile ? "start" : "center",
        });
    }
};