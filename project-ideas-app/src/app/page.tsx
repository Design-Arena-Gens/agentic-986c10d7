type ProjectIdea = {
  id: string;
  title: string;
  challenge: string;
  hardwareFocus: string[];
  matlabFocus: string[];
  pcbHighlights: string[];
  deliverables: string[];
  stretchGoals?: string[];
};

const projectIdeas: ProjectIdea[] = [
  {
    id: "adaptive-pv",
    title: "Adaptive PV Converter with Grid Support Diagnostics",
    challenge:
      "Design a DC-DC converter for rooftop PV strings that maximizes energy extraction while diagnosing grid compatibility issues in real time.",
    hardwareFocus: [
      "Synchronous buck-boost power stage with isolated gate drive",
      "Hall-effect current sensing and precision voltage monitoring",
      "ESP32 or STM32 MCU for real-time control and WiFi telemetry",
    ],
    matlabFocus: [
      "Simulink model of MPPT algorithms (Perturb & Observe vs. IC)",
      "State-space averaged converter model with small-signal stability analysis",
      "Fault signature classification using feature extraction on grid voltage",
    ],
    pcbHighlights: [
      "4-layer layout separating power and control grounds with Kelvin sensing",
      "Gate driver flyback supply and thermal management footprints",
      "Modular measurement card supporting hot-swappable sensors",
    ],
    deliverables: [
      "MATLAB report comparing MPPT strategies under irradiance ramps",
      "Validated converter efficiency >90% at 50–150 W on bench",
      "WiFi dashboard logging grid anomalies and converter status",
      "Thermal profile and EMI scan using oscilloscope/LC probes",
    ],
    stretchGoals: [
      "Add grid-tied inverter handshake emulation to flag incompatibilities",
      "Implement adaptive control that retunes compensator parameters live",
    ],
  },
  {
    id: "smart-comp",
    title: "Smart Distribution Capacitor Bank with Harmonic Guard",
    challenge:
      "Build an automated shunt capacitor controller that mitigates voltage sag while preventing resonance with nonlinear loads.",
    hardwareFocus: [
      "Three-phase sensing via instrumentation amplifiers and Rogowski coils",
      "Solid-state relay or TRIAC driver board with zero-cross detection",
      "STM32-based control with real-time FFT on sampled waveforms",
    ],
    matlabFocus: [
      "Distribution feeder simulation with nonlinear load profiles",
      "Adaptive notch filter design tuned through harmonic estimation",
      "Controller optimization to balance power factor vs. THD",
    ],
    pcbHighlights: [
      "High-voltage clearance routing with opto-isolated control domains",
      "Modular sensor headers for Rogowski coil interface",
      "On-board calibration circuitry for gain/phase alignment",
    ],
    deliverables: [
      "MATLAB/Simulink validation of harmonic suppression strategy",
      "Hardware demo achieving PF ≥0.95 and THD reduction ≥20%",
      "Oscilloscope captures showing switching coordination with zero-cross",
      "PCB bring-up notes documenting isolation tests and firmware flow",
    ],
    stretchGoals: [
      "Integrate CAN or Modbus RTU telemetry for substation monitoring",
    ],
  },
  {
    id: "motor-health",
    title: "Predictive Condition Monitoring for Induction Motors",
    challenge:
      "Develop a condition-based maintenance module that detects bearing wear and rotor faults using electrical signatures.",
    hardwareFocus: [
      "Non-invasive current transformers with anti-aliasing filters",
      "ARM Cortex-M4/F MCU implementing sliding-window FFT",
      "Isolated USB interface for data logging and firmware updates",
    ],
    matlabFocus: [
      "MCSA (Motor Current Signature Analysis) algorithm prototyping",
      "Order tracking and spectral kurtosis for early fault detection",
      "Machine learning classifier (SVM/CNN) trained on lab data",
    ],
    pcbHighlights: [
      "Differential signal routing to reduce measurement noise",
      "Precision reference and programmable gain amplifiers",
      "Modular sensor daughtercards for quick swapping",
    ],
    deliverables: [
      "MATLAB dataset with labeled fault conditions and confusion matrix",
      "Real-time dashboard highlighting fault indices and severity",
      "Hardware tests on lab induction motor with seeded defects",
      "Documentation of calibration routine and firmware update flow",
    ],
    stretchGoals: [
      "Deploy edge ML model directly on MCU via CMSIS-NN",
      "Add vibration sensor fusion for multi-modal diagnostics",
    ],
  },
  {
    id: "grid-forming-inverter",
    title: "Microgrid Inverter Emulator with Virtual Synchronous Control",
    challenge:
      "Prototype a low-voltage inverter that emulates synchronous generator behavior for islanded microgrids.",
    hardwareFocus: [
      "H-bridge with SiC MOSFETs or fast MOSFETs and LC output filter",
      "Isolation amplifiers measuring output voltage/current",
      "DSP or high-speed MCU for virtual inertia and droop control",
    ],
    matlabFocus: [
      "Small-signal stability study of droop coefficients",
      "Design of virtual synchronous machine (VSM) control loops",
      "Hardware-in-the-loop (HIL) emulation using Simulink",
    ],
    pcbHighlights: [
      "Compact power board with thermal vias and current sharing traces",
      "Separation of high dv/dt nodes and sense circuitry",
      "Pluggable control card supporting firmware swaps",
    ],
    deliverables: [
      "MATLAB model validating ride-through under 20% load steps",
      "Bench test sustaining 24 V AC output within ±2% voltage regulation",
      "Scope captures of phase response before/after droop tuning",
      "Safety checklist covering isolation, creepage, and thermal results",
    ],
    stretchGoals: [
      "Parallel operation demonstration with load sharing between two units",
      "Firmware switch between VSM and traditional voltage-source control",
    ],
  },
  {
    id: "ultrasonic-nondestructive",
    title: "Ultrasonic NDT Platform with Adaptive Pulse Compression",
    challenge:
      "Design a portable ultrasonic tester for composite materials using advanced signal processing to enhance defect detectability.",
    hardwareFocus: [
      "High-voltage pulser/receiver front end with programmable gain",
      "Custom transducer interface and protection clamping network",
      "FPGA-assisted or MCU-DSP hybrid for timing precision",
    ],
    matlabFocus: [
      "Wave propagation modeling and matched filter design",
      "Pulse compression and deconvolution algorithms",
      "Defect classification using time-frequency feature extraction",
    ],
    pcbHighlights: [
      "Controlled-impedance traces for transducer connection",
      "Shielded analog front-end with low-noise design techniques",
      "Configurable daughterboard for different probe footprints",
    ],
    deliverables: [
      "MATLAB report comparing axial resolution pre/post compression",
      "Hardware scans on reference coupons highlighting defect detection",
      "GUI exporting C-scan style visualizations from oscilloscope captures",
      "Calibration workflow document including probe normalization",
    ],
    stretchGoals: [
      "Implement real-time GPU-accelerated visualization via Jetson Nano",
      "Add adaptive gain scheduling based on signal-to-noise estimation",
    ],
  },
  {
    id: "hybrid-storage",
    title: "Hybrid Energy Storage Supervisor for Fast EV Chargers",
    challenge:
      "Coordinate supercapacitor and battery modules to smooth fast-charger load transients while extending battery life.",
    hardwareFocus: [
      "Bidirectional DC-DC converters for supercapacitor and battery ports",
      "CAN-enabled microcontroller managing state-of-charge balancing",
      "High-side current sensing with simultaneous sampling ADCs",
    ],
    matlabFocus: [
      "Dynamic programming to optimize energy flow under demand pulses",
      "Electrothermal battery modeling with degradation metrics",
      "Control co-simulation of converter current loops and supervisory logic",
    ],
    pcbHighlights: [
      "Interleaved layout for current sharing and reduced ripple",
      "Thermal sensors integrated near power components",
      "Connectorization for safe module swaps during testing",
    ],
    deliverables: [
      "MATLAB study quantifying battery stress reduction ≥25%",
      "Hardware-in-loop tests responding to 50 A step in <2 ms",
      "Data logger showcasing energy split under various duty cycles",
      "Comprehensive risk assessment and mitigation logbook",
    ],
    stretchGoals: [
      "Vehicle-to-grid mode with predictive scheduling",
      "Cloud dashboard summarizing field data via MQTT",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_top,_#1e293b_0%,_transparent_65%)] text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
            Semester 5 Capstone Prep
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            High-Impact Electrical Engineering Mini Projects for an 8-Week
            Sprint
          </h1>
          <p className="max-w-3xl text-lg text-slate-300 sm:text-xl">
            Each concept couples rigorous MATLAB modeling with fabrication-ready
            PCB design, emphasizing measurable performance metrics, modern
            control and signal processing strategies, and lab validation suited
            to Mumbai University resources.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-2">
          {projectIdeas.map((idea) => (
            <article
              key={idea.id}
              className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-[0_20px_45px_-35px_rgba(56,189,248,0.65)] backdrop-blur-lg transition hover:border-sky-400/70 hover:shadow-[0_25px_50px_-30px_rgba(56,189,248,0.9)]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                  {idea.id.replace(/-/g, " ")}
                </span>
                <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                  {idea.title}
                </h2>
                <p className="text-base text-slate-300">{idea.challenge}</p>
              </div>

              <div className="flex flex-col gap-4">
                <IdeaSection label="Hardware Focus" items={idea.hardwareFocus} />
                <IdeaSection label="MATLAB & Simulation Roadmap" items={idea.matlabFocus} />
                <IdeaSection label="PCB & Integration Highlights" items={idea.pcbHighlights} />
                <IdeaSection
                  label="Core Deliverables"
                  items={idea.deliverables}
                  highlight
                />
                {idea.stretchGoals && (
                  <IdeaSection label="Stretch Targets" items={idea.stretchGoals} muted />
                )}
              </div>
            </article>
          ))}
        </section>

        <footer className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
          <h3 className="text-xl font-semibold text-slate-50">
            Execution Framework
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Weeks 1–2
              </span>
              <p>MATLAB modeling, requirements capture, and BOM lock-in.</p>
            </li>
            <li className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Weeks 3–4
              </span>
              <p>PCB schematic, layout iterations, and simulation-hardware correlation.</p>
            </li>
            <li className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Weeks 5–6
              </span>
              <p>Firmware integration, lab validation, and measurement automation.</p>
            </li>
            <li className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Weeks 7–8
              </span>
              <p>Performance tuning, documentation, and presentation packaging.</p>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

type IdeaSectionProps = {
  label: string;
  items: string[];
  highlight?: boolean;
  muted?: boolean;
};

function IdeaSection({ label, items, highlight, muted }: IdeaSectionProps) {
  const borderClass = highlight
    ? "border-sky-400/60 bg-sky-950/40"
    : "border-slate-800/70 bg-slate-950/40";

  const textClass = muted ? "text-slate-400" : "text-slate-300";

  return (
    <section className={`rounded-2xl border ${borderClass} p-5`}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
        {label}
      </h3>
      <ul className={`mt-3 flex list-disc flex-col gap-2 pl-5 text-sm ${textClass}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
