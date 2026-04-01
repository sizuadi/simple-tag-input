import { useState } from "react";
import type { KeyboardEvent } from "react";
import "./App.css";

function App() {
	// Local state for the input text, created tags, and validation feedback.
	const [inputValue, setInputValue] = useState<string>("");
	const [tags, setTags] = useState<string[]>([]);
	const [error, setError] = useState<string>("");

	const addTag = (): void => {
		// Normalize user input so whitespace-only entries are rejected.
		const trimmed = inputValue.trim();

		if (!trimmed) {
			setError("Tag cannot be empty.");
			return;
		}

		if (tags.includes(trimmed)) {
			setError("Duplicate tags are not allowed.");
			return;
		}

		// Functional update avoids stale state when updates are queued.
		setTags((prevTags) => [...prevTags, trimmed]);
		setInputValue("");
		setError("");
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		// Add a tag only when Enter is pressed.
		if (event.key !== "Enter") {
			return;
		}

		event.preventDefault();
		addTag();
	};

	const removeTag = (tagToRemove: string): void => {
		// Remove the selected tag while keeping the rest.
		setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
		setError("");
	};

	return (
		<main className="page">
			<section className="card" aria-label="Simple tag input component">
				<div className="heading">
					<h1>Simple Tag Input</h1>
					<p>
						Type a tag and press Enter. Empty and duplicate tags are blocked.
					</p>
				</div>

				<div className="tag-list" role="list" aria-label="Added tags">
					{tags.length === 0 ? (
						<p className="empty-state">No tags yet.</p>
					) : (
						tags.map((tag) => (
							<span key={tag} className="tag-pill" role="listitem">
								{tag}
								<button
									type="button"
									className="remove-button"
									onClick={() => removeTag(tag)}
									aria-label={`Remove ${tag}`}>
									×
								</button>
							</span>
						))
					)}
				</div>

				<div className="input-group">
					<label htmlFor="tag-input" className="input-label">
						Tag name
					</label>
					<input
						id="tag-input"
						type="text"
						value={inputValue}
						// Controlled input keeps UI and state fully synchronized.
						onChange={(event) => {
							setInputValue(event.target.value);
							if (error) {
								setError("");
							}
						}}
						onKeyDown={handleKeyDown}
						placeholder="e.g. React"
						className="tag-input"
					/>
					{error && (
						<p className="error" role="alert">
							{error}
						</p>
					)}
				</div>
			</section>
		</main>
	);
}

export default App;
