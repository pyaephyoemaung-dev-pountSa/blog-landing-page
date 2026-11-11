import { components } from "#/constants/navComponent"
import { Link } from "@tanstack/react-router"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { Brain, Certificate, ChartColumn, GraduationCap, MessageSquare, Video } from "lucide-react"

const Header = () =>
{
    return (
        <>
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-96">
                    <div className="flex items-center">
                        <GraduationCap width="24" height="24" className="border rounded p-auto"/>
                        <ListItem href="/docs" title="Course Management & Content">
                        Create, organization and deliver courses    
                    </ListItem>
                    </div>
                    <div className="flex items-center">
                        <ChartColumn width="24" height="24" className="border rounded p-auto"/>
                        <ListItem href="/docs" title="Course Management & Content">
                        Create, organization and deliver courses    
                    </ListItem>
                    </div>
                    <div className="flex items-center">
                        <Video width="24" height="24" className="border rounded p-auto"/>
                        <ListItem href="/docs" title="Course Management & Content">
                        Create, organization and deliver courses    
                    </ListItem>
                    </div>
                    <div className="flex items-center">
                        <Brain width="24" height="24" className="border rounded p-auto"/>
                        <ListItem href="/docs" title="Course Management & Content">
                        Create, organization and deliver courses    
                    </ListItem>
                    </div>
                    <div className="flex items-center">
                        <MessageSquare width="24" height="24" className="border rounded p-auto"/>
                        <ListItem href="/docs" title="Course Management & Content">
                        Create, organization and deliver courses    
                    </ListItem>
                    </div>
                    <div className="flex items-center">
                        <Certificate width="24" height="24" className="border rounded p-auto"/>
                        <ListItem href="/docs" title="Course Management & Content">
                        Create, organization and deliver courses    
                    </ListItem>
                    </div>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                    {components.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/">About</Link>
                </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string })
{
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={href} className="">
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default Header