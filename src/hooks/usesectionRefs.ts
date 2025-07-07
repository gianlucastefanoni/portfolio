import { useRef } from "react";

export const useSectionRefs = () => {
  return {
    about: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    contacts: useRef<HTMLElement | null>(null),
  };
};