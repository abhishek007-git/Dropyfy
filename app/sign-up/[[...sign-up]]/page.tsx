import SignUpForm from "@/components/SignUpForm";
import { CloudUpload } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Use the unified Navbar component */}
      <Navbar />

      <main className="flex-1 flex justify-center items-center p-6">
        <SignUpForm />
      </main>

      {/* Dark mode footer */}
      <footer className="bg-gray-900 text-default-900 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-default-400">
            &copy; {new Date().getFullYear()} Dropyfy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
