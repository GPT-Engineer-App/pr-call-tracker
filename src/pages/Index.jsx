import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to PR Agency Call Tracker</h1>
      <p className="text-xl mb-8">
        Efficiently manage and track your client communications with our easy-to-use call logging system.
      </p>
      <Button asChild>
        <Link to="/track-calls">Start Tracking Calls</Link>
      </Button>
    </div>
  );
};

export default Index;