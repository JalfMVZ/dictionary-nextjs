"use client"

import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { useDispatch, useSelector } from 'react-redux';
import { setFont } from '../store/themeSlice';
import { RootState } from '../store';

export const FontSelector: React.FC = () => {
  const dispatch = useDispatch();
  const currentFont = useSelector((state: RootState) => state.theme.font);

  const handleFontChange = (value: string) => {
    dispatch(setFont(value));
  };

  return (
    <Select value={currentFont} onValueChange={handleFontChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a font" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="inter">Sans Serif</SelectItem>
        <SelectItem value="lora">Serif</SelectItem>
        <SelectItem value="inconsolata">Mono</SelectItem>
      </SelectContent>
    </Select>
  );
};