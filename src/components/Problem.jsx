import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Problem = ({ idx, handleChange, isSubmitted }) => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                handleChange(idx, "imageFile", file);  // Pass the file object to the parent component
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
            handleChange(idx, "imageFile", null);  // Pass null if no file is selected
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto mt-8">
            <CardHeader>
                <CardTitle>Please Enter the Issue Details</CardTitle>
            </CardHeader>
            <hr />
            <CardContent className="mt-4">
                <div className="grid w-full items-center gap-2 mb-5">
                    <Label htmlFor="picture">Picture</Label>
                    <div className="relative w-full">
                        <Input
                            id="picture"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                            disabled={isSubmitted}
                        />
                        <Button
                            type="button"
                            className="w-full bg-gray-500 text-black"
                        >
                            Upload Picture
                        </Button>
                    </div>
                </div>
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Selected Preview"
                        className="max-h-96 w-full my-4"
                    />
                )}
                <div className="flex w-full gap-4 mb-5 items-between">
                    <Select className="w-full" onValueChange={(value) => handleChange(idx, "subject", value)} disabled={isSubmitted}>
                        <SelectTrigger>
                            <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="neural-networks">Neural Networks</SelectItem>
                            <SelectItem value="internet-of-things">Internet of Things</SelectItem>
                            <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                            <SelectItem value="front-end-web-development">Frontend Web Development</SelectItem>
                            <SelectItem value="big-data-with-hadoop-and-spark">Big Data with Hadoop and Spark</SelectItem>
                            <SelectItem value="computer-networks">Computer Networks</SelectItem>
                            <SelectItem value="ai-tech-and-appl">AI Technologies and Applications</SelectItem>
                            <SelectItem value="nlp-using-transformers">NLP using Transformers</SelectItem>
                            <SelectItem value="data-mining">Data Mining</SelectItem>
                            <SelectItem value="aws">Intro to AWS</SelectItem>
                            <SelectItem value="web-technologies">Web Technologies</SelectItem>
                            <SelectItem value="ds-and-security">Managing DS and Security</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-full" onValueChange={(value) => handleChange(idx, "unitTest", value)} disabled={isSubmitted}>
                        <SelectTrigger>
                            <SelectValue placeholder="Unit Test" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="unit-test-1">Unit Test 1</SelectItem>
                            <SelectItem value="unit-test-3">Unit Test 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        name="description"
                        onChange={(e) => handleChange(idx, "description", e.target.value)}
                        disabled={isSubmitted}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Problem;
