"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { type FC } from 'react';

interface FormAirplaneProps { }

const FormAirplane: FC = () => {
    return (
        <form action="" className='w-[40%] space-y-4'>
            <div className="space-y-2">
                <Label htmlFor='code'>Kode Pesawat</Label>
                <Input placeholder='Kode pesawat...' name='code' id='code' required></Input>
            </div>
            <div className="space-y-2">
                <Label htmlFor='name'>Nama Pesawat</Label>
                <Input placeholder='Nama pesawat...' name='name' id='name' required></Input>
            </div>
            <div className="space-y-2">
                <Label htmlFor='image'>Upload Foto</Label>
                <Input type='file' placeholder='Upload Foto...' name='image' id='image' required></Input>
            </div>
            <Button className='w-full'>
                Submit
            </Button>
        </form>
    );
};

export default FormAirplane;