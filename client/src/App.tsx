import { useState } from "react";
import "./App.css";

// type for the tag object
type Tag = {
  name: string;
  confidence: number;
};

const App = () => {
  const [url, setURL] = useState<string>("");
  const [result, setResult] = useState<Tag[]>([]);

  /**
   * Handles the submit event of the URL form.
   * @param event - The submit event object.
   */
  const handleURLPost = async (event: React.FormEvent) => {
    event.preventDefault();
    // call the post data function
    const result = await postData(
      `${import.meta.env.VITE_API_HOST}/api/v1/computerVision/getImageTags/`,
      url
    );

    setResult(result);
  };

  const postData = async (url: string, data: string) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: data }), // body data type must match "Content-Type" header
    });
    const result = await response.json();
    return result.data; // parses JSON response into native JavaScript
  };

  /**
   * Handles the change event of the URL input field.
   * @param event - The change event object.
   */
  const handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setURL(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-lg"
          data-v0-t="card"
        >
          <div className="p-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">Process Image URL</h2>
                <div className="text-zinc-500 dark:text-zinc-400">
                  <p>
                    Add a URL to an image and click the Process button to get
                    the image tags
                  </p>
                  {result.length > 0 && (
                    <h3 className="text-lg font-semibold mt-8">Tags</h3>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {result &&
                      result.map((tag) => (
                        <div className="" key={tag.name}>
                          {tag.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <form
                method="POST"
                action="#"
                className="space-y-6"
                onSubmit={handleURLPost}
                id="urlForm"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="urlLink"
                    >
                      URL to Image
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="urlLink"
                      placeholder="Enter the URL to the image"
                      required
                      onChange={handleURLChange}
                    />
                  </div>

                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-800 text-white"
                    type="submit"
                  >
                    Process
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
