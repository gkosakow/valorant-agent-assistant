import {
    Breadcrumb,
    BreadcrumbItem,
    Center
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const Credits = () => {
    return (
        <Center className="credits">
            <Breadcrumb separator='|'>
                <BreadcrumbItem>
                    <Link href="">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href="">About</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href="https://github.com/gkosakow">GitHub</Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </Center>
    )
}

export default Credits;