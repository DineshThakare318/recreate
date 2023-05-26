'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"

interface props {
    image: any,
    title: string,
    description: string,
    price: number,
    brand: string,
    category: string
}

export const CardComponent: React.FC<props> = ({
    image,
    title,
    description,
    price,
    brand,
    category
}) => {
    return (
        <div>
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img src={image} />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        {price}&euro;
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                    <Typography>
                        {brand}
                    </Typography>
                    <Typography>
                        {category}
                    </Typography>
                </CardBody>
                {/* <CardFooter className="pt-0">
                    <Button onClick={onClick}><Link href="/Gaurav/Details">Read More</Link></Button>
                </CardFooter> */}
            </Card>
        </div>
    )
}