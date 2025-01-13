<template>
    <div class="terminal" @click="focusInput">
      <div class="terminal-header">
        <div class="buttons">
          <span class="button red"></span>
          <span class="button yellow"></span>
          <span class="button green"></span>
        </div>
        <div class="title">Comedy Terminal</div>
      </div>
      <div class="terminal-body" ref="terminalBody">
        <div class="output" v-for="(line, index) in output" :key="index">
          <span v-if="line.type === 'command'" class="command">$ {{ line.text }}</span>
          <span v-else-if="line.type === 'response'" class="response">{{ line.text }}</span>
        </div>
        <div class="input-line">
          <span>$&nbsp;</span>
          <input 
            v-model="currentInput" 
            @keydown.enter="handleCommand" 
            @keydown="focusInput" 
            ref="commandInput"
            class="input-field"
          />
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, useTemplateRef } from 'vue';
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { toggleTheme, siteTheme } = useThemeAbstraction()

const terminalBodyRef = useTemplateRef('terminalBody');
const commandInputRef = useTemplateRef('commandInput');

const currentInput = ref('');
const output = ref([
    {
        type: 'response',
        text: 'Welcome to the Comedy Terminal! Type /help for commands.'
    }
]);
const commands = {
    '/help': 'Available commands: /help, /vibe, /joke, /about',
    '/vibe': [],
    '/joke': [
        'Why do programmers prefer dark mode? Because light attracts bugs!',
        'Why did the developer go broke? Because they used up all their cache!',
        'Debugging is like an episode of Law and Order where you are the detective, the entire legal system, and the criminal.'
    ],
    '/about': [
        'This terminal is brought to you by Moriel, the 10x comedian!',
        'Moriel: Making tech jokes that are 99% uptime and 1% puns.',
        'Designed by Moriel, your go-to for staging puns before production.'
    ]
}

const handleCommand = async () => {
    const command = currentInput.value.trim();
    output.value.push({ type: 'command', text: command });
    switch (command) {
        case '/help':
            output.value.push({
                type: 'response',
                text: commands[command]
            });
            break;
        case '/vibe':
            output.value.push({
                type: 'response',
                text: 'Vibe shifted to ' + (siteTheme.value === 'corporate' ? 'afterhours' : 'corporate')
            });
            toggleTheme()
            break;
        default:
            if (commands[command]) { // If the command exists
                const randomResponse = commands[command][Math.floor(Math.random() * commands[command].length)];
                output.value.push({
                    type: 'response',
                    text: randomResponse
                });
            } else {
                output.value.push({
                    type: 'response',
                    text: `Command not found: ${command}. Type /help for a list of commands.`
                });
            }
            break;
    }
    currentInput.value = ''
    await nextTick()
    terminalBodyRef.value.scrollTop = terminalBodyRef.scrollHeight;
}

const focusInput = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
    commandInputRef.value.focus();
}
</script>

<style scoped>
.terminal {
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    background-color: #2b2b2b;
    color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

.terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #444;
    padding: 0.5rem;
    box-sizing: border-box;
}

.buttons {
    display: flex;
    gap: 0.3rem;
}

.button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.button.red {
    background-color: #ff605c;
}

.button.yellow {
    background-color: #ffbd44;
}

.button.green {
    background-color: #00ca4e;
}

.terminal-body {
    flex-grow: 1;
    padding: 1rem;
    overflow-y: auto;
    box-sizing: border-box;
}

.output {
    margin-bottom: 0.5rem;
}

.command {
    color: #1e90ff;
}

.response {
    color: #dcdcdc;
}

.input-line {
    display: flex;
    align-items: center;
}

.input-field {
    background: none;
    border: none;
    color: white;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    box-sizing: border-box;
}

@media (max-width: 600px) {
    .terminal {
      height: 300px;
    }
}
</style>
