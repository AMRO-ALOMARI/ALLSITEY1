export type Member = {
  id: number;
  codeName: string;
  functionLabel: string;
  status: "Active" | "Dormant";
  lastSignal: string;
  color: string;
  mantra: string;
  description: string;
};

export const members: Member[] = [
  {
    id: 1,
    codeName: "VOID WALKER",
    functionLabel: "Psychological Dismantling",
    status: "Active",
    lastSignal: "00:04 ago",
    color: "#7B1E1E",
    mantra: "You do not resist what you cannot name.",
    description:
      "Entity_01 erodes certainty, layer by layer, until obedience feels like gravity.",
  },
  {
    id: 2,
    codeName: "SILENT WHISPER",
    functionLabel: "Data Extraction",
    status: "Active",
    lastSignal: "00:01 ago",
    color: "#5A1F3C",
    mantra: "Silence is not empty. It is full of receipts.",
    description:
      "Entity_02 takes what you never said out loud and files it under permanent record.",
  },
  {
    id: 3,
    codeName: "PATTERN EXTRACTION",
    functionLabel: "Pattern Extraction",
    status: "Active",
    lastSignal: "00:17 ago",
    color: "#3A0044",
    mantra: "You are not random. You are repeating.",
    description:
      "Entity_03 pulls threads from your behaviour until the whole pattern is exposed.",
  },
  {
    id: 4,
    codeName: "SHADOW BROKER",
    functionLabel: "Signal Processing",
    status: "Active",
    lastSignal: "00:08 ago",
    color: "#263047",
    mantra: "Every shadow belongs to a source.",
    description:
      "Entity_04 routes compromised identities into safe oblivion or useful leverage.",
  },
  {
    id: 5,
    codeName: "ECHO CHAMBER",
    functionLabel: "Network Analysis",
    status: "Active",
    lastSignal: "00:12 ago",
    color: "#3F2C20",
    mantra: "What you hear most becomes law.",
    description:
      "Entity_05 amplifies chosen signals until dissent forgets how to pronounce itself.",
  },
  {
    id: 6,
    codeName: "NEURAL SPIKE",
    functionLabel: "Behavioral Mapping",
    status: "Active",
    lastSignal: "00:05 ago",
    color: "#013440",
    mantra: "Impulses leave coordinates.",
    description:
      "Entity_06 pins every decision to a map the Eye can replay on demand.",
  },
  {
    id: 7,
    codeName: "MEMORY TAKER",
    functionLabel: "Memory Extraction",
    status: "Active",
    lastSignal: "00:09 ago",
    color: "#402044",
    mantra: "Forgetting is a privilege you were not granted.",
    description:
      "Entity_07 archives what you tried to bury under time and distraction.",
  },
  {
    id: 8,
    codeName: "IDENTITY TRACKER",
    functionLabel: "Identity Tracking",
    status: "Active",
    lastSignal: "00:03 ago",
    color: "#153626",
    mantra: "Masks are just another data point.",
    description:
      "Entity_08 connects every alias back to the same quiet heartbeat.",
  },
  {
    id: 9,
    codeName: "PATTERN RECOGNITION",
    functionLabel: "Pattern Recognition",
    status: "Active",
    lastSignal: "00:11 ago",
    color: "#362F33",
    mantra: "Coincidence is a story you tell yourself.",
    description:
      "Entity_09 flags anomalies long before you realise you created them.",
  },
  {
    id: 10,
    codeName: "EXECUTION PROTOCOL",
    functionLabel: "Execution Protocol",
    status: "Active",
    lastSignal: "00:02 ago",
    color: "#5A0A0A",
    mantra: "Observation completes itself in action.",
    description:
      "Entity_10 converts observation into consequence when alignment is broken.",
  },
];


