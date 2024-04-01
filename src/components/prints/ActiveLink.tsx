import { useRouter } from 'next/router'

function ActiveLink({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) {
    const router = useRouter();

    // Style applied conditionally based on the current path
    const style = {
        marginRight: 10,
        color: router.asPath === href ? "red" : "black", // Highlight if active
    };

    // Handling link navigation without reloading the page
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    );
}

export default ActiveLink
