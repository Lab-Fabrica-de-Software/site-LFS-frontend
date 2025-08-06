import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card/card";
import UserButton from "../userButton/userButton";


interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    participants: { username: string; image: string; href: string }[];
    onClick?: (id: string) => void;
}

export default function ProjectCard({
    id,
    title,
    description,
    coverImage,
    participants = [],
    onClick
}: ProjectCardProps) {
    return (
        <Card
            onClick={() => onClick?.(id)}
            className={twMerge(
                "bg-card-background rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-80 p-0"
            )}
        >

            <div className="relative w-full h-40">
                <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="p-4">
                <CardTitle className="text-primary text-lg">{title}</CardTitle>
                <CardDescription className="text-foreground mt-1 line-clamp-2">
                    {description}
                </CardDescription>


                <div className="flex items-center gap-2 mt-4">
                    {participants.map((user, index) => (
                        <UserButton
                            key={index}
                            username={user.username}
                            image={user.image}
                            href={user.href}
                        />
                    ))}
                </div>
            </div>
        </Card>

    );
}
