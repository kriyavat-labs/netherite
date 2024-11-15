"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <section className="m-10">
      <NewNoteCard />
    </section>
  );
}

const NewNoteCard = () => {
  return (
    <>
      <Card className="w-[300px] shadow-none ">
        <div className="p-3">
          <span className="text-xs text-primary">ADD NEW CARD</span>
        </div>
      </Card>
    </>
  );
};
