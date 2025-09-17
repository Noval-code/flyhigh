import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | Home",
};

export default function DashboardHomePage() {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Welcome to FlyHigh Dashboard</h1>
            <p className="text-muted-foreground">Select a menu from the sidebar to get started.</p>
        </main>
    );
}


