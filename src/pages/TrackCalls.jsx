import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

const TrackCalls = () => {
  const [calls, setCalls] = useState([]);
  const [clientName, setClientName] = useState("");
  const [callDateTime, setCallDateTime] = useState("");
  const [callOutcome, setCallOutcome] = useState("");

  useEffect(() => {
    // Set the default date and time to now when the component mounts
    const now = new Date();
    const formattedDateTime = format(now, "yyyy-MM-dd'T'HH:mm");
    setCallDateTime(formattedDateTime);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCall = {
      clientName,
      callDateTime,
      callOutcome,
    };
    setCalls([...calls, newCall]);
    setClientName("");
    setCallOutcome("");
    // Reset the date and time to now after submitting
    const now = new Date();
    const formattedDateTime = format(now, "yyyy-MM-dd'T'HH:mm");
    setCallDateTime(formattedDateTime);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Track Calls</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
            Client Name
          </label>
          <Input
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="callDateTime" className="block text-sm font-medium text-gray-700">
            Date and Time of Call
          </label>
          <Input
            id="callDateTime"
            type="datetime-local"
            value={callDateTime}
            onChange={(e) => setCallDateTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="callOutcome" className="block text-sm font-medium text-gray-700">
            Outcome of Call
          </label>
          <Textarea
            id="callOutcome"
            value={callOutcome}
            onChange={(e) => setCallOutcome(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Log Call</Button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Logged Calls</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client Name</TableHead>
            <TableHead>Date and Time</TableHead>
            <TableHead>Outcome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map((call, index) => (
            <TableRow key={index}>
              <TableCell>{call.clientName}</TableCell>
              <TableCell>{format(new Date(call.callDateTime), "PPpp")}</TableCell>
              <TableCell>{call.callOutcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TrackCalls;