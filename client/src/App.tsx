import { useState } from "react";
import "./App.css";

const App = () => {
  const handleImageUpload = (event: React.FormEvent) => {
    event.preventDefault();
    // handle image upload logic here
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">Upload Image</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Upload an image of the type of car you wish to buy.
                </p>
              </div>
              <form
                method="POST"
                action="#"
                className="space-y-6"
                onSubmit={handleImageUpload}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="imageFile"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="imageFile"
                      placeholder="Enter your email"
                    />
                  </div>

                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-800 text-white"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
