import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
type Props = {}

const Products = (props: Props) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-black border border-gray-800 w-2/3 p-6'>
                        <div className='flex justify-between w-[600px] h-[100px]'>
                            <div className='flex flex-col'>
                                <p className='text-blue-800 text-sm'>Accept payments</p>
                            </div>

                            <div>
                                <p className='text-yellow-500'>Embeded payments</p>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default Products