import { onerror } from "./onerror";
import { unhandledrejection } from "./unhandledrejection";
// import { crossorigin } from "./crossorigin";
import { xhr } from "./xhr";
import { instrumentConsole } from "./console";

onerror();
unhandledrejection();
// crossorigin();
xhr();
instrumentConsole();
