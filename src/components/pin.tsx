import type { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Eye, Newspaper, Sparkle } from "lucide-react";


interface InterviewPinProps {
    interview: Interview;
    onMockPage?: boolean

}

export const InterviewPin = ({ interview, onMockPage = false }: InterviewPinProps) => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { userId } = useAuth();




    return <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
        <CardTitle className="text-lg">{interview?.position}</CardTitle>
        <CardDescription>{interview?.description}</CardDescription>
        <CardFooter
            className={cn(
                "w-full flex items-center p-0",
                onMockPage ? "justify-end" : "justify-between"
            )}
        >
            <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
                {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
                    "en-US",
                    { dateStyle: "long" }
                )} - ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
                    "en-US",
                    { timeStyle: "short" }
                )}`}
            </p>

            {!onMockPage && (
                <div className="flex items-center justify-center">
                    <TooltipButton
                        content="View"
                        buttonVariant={"ghost"}
                        onClick={() => {
                            navigate(`/generate/${interview?.id}`, { replace: true });
                        }}
                        disabled={false}
                        buttonClassName="hover:text-sky-500"
                        icon={<Eye />}
                        loading={false}
                    />

                    <TooltipButton
                        content="Feedback"
                        buttonVariant={"ghost"}
                        onClick={() => {
                            navigate(`/generate/feedback/${interview?.id}`, {
                                replace: true,
                            });
                        }}
                        disabled={false}
                        buttonClassName="hover:text-yellow-500"
                        icon={<Newspaper />}
                        loading={false}
                    />

                    <TooltipButton
                        content="Start"
                        buttonVariant={"ghost"}
                        onClick={() => {
                            navigate(`/generate/interview/${interview?.id}`, {
                                replace: true,
                            });
                        }}
                        disabled={false}
                        buttonClassName="hover:text-sky-500"
                        icon={<Sparkle />}
                        loading={false}
                    />
                </div>
            )}
        </CardFooter>


    </Card>
}